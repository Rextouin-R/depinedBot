import * as utils from './utils/api.js';
import banner from './utils/banner.js';
import log from './utils/logger.js';
import { readFile, delay } from './utils/helper.js'

const main = async () => {
    log.info(banner);
    await delay(3)
    const tokens = await readFile("tokens.txt");
    if (tokens.length === 0) {
        log.error('Tidak ada token ditemukan di tokens.txt');
        return;
    }
    const proxies = await readFile("proxy.txt");
    if (proxies.length === 0) {
        log.warn('Berjalan tanpa proxy...');
    }

    try {
        log.info(`Memulai program untuk semua akin:`, tokens.length);

        for (let index = 0; index < tokens.length; index++) {
            const token = tokens[index]
            const proxy = proxies[index % proxies.length] || null;
            try {
                const userData = await utils.getUserInfo(token, proxy);

                if (userData?.data) {
                    const { email, verified, current_tier, points_balance } = userData.data
                    log.info(`Akun ${index + 1} info:`, { email, verified, current_tier, points_balance });
                }

                await checkUserRewards(token, proxy);

                setInterval(async () => {
                    const connectRes = await utils.connect(token, proxy);
                    log.info(`Hasil ping untuk semua akun ${index + 1}:`, connectRes || { message: 'unknown error' });

                    const result = await utils.getEarnings(token, proxy);
                    log.info(`Hasil pendapatan semua akun ${index + 1}:`, result?.data || { message: 'unknown error' });
                }, 1000 * 30); // Run every 30 seconds

                setInterval(async () => {
                    await checkUserRewards(token, proxy);
                }, 1000 * 60 * 60 * 24); // check every 24 hours

            } catch (error) {
                log.error(`Kesalahan memproses akun ${index}: ${error.message}`);
            }
        };

        await Promise.all(accountsProcessing);
    } catch (error) {
        log.error(`Kesalahan dalam loop utama: ${error.message}`);
    }
};

const checkUserRewards = async (token, proxy) => {
    try {
        const response = await utils.getUserRef(token, proxy)
        const { total_unclaimed_points } = response?.data || 0;
        if (total_unclaimed_points > 0) {
            log.info(`Akun ${index + 1} has ${total_unclaimed_points}Tidak ada point yang di claim, mencoba mengclaimnya...`);
            const claimResponse = await utils.claimPoints(token, proxy);
            if (claimResponse.code === 200) {
                log.info(`Akun ${index + 1} Berhasil mengclaim! ${total_unclaimed_points} points`);
            }
        }
    } catch (error) {
        log.error(`Kesalahan memeriksa reward user: ${error.message}`);
    }
}

process.on('SIGINT', () => {
    log.warn(`Process received SIGINT, cleaning up and exiting program...`);
    process.exit(0);
});

process.on('SIGTERM', () => {
    log.warn(`Process received SIGTERM, cleaning up and exiting program...`);
    process.exit(0);
});


// Run the main function
main();
