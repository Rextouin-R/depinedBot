import randomUseragent from 'random-useragent';
import log from './logger.js';
import { newAgent } from './helper.js';

const userAgent = randomUseragent.getRandom();
const headers = {
    'accept': 'application/json',
    'user-agent': userAgent,
    Origin: "chrome-extension://pjlappmodaidbdjhmhifbnnmmkkicjoc",
    "Content-Length": 18,
};

const fetchWithTimeout = async (url, options = {}, timeout = 60000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
};

export const registerUser = async (email, password, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/user/register';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({ email, password }),
            agent,
        });
        const data = await response.json();
        log.info('User berhasil registrasi:', data.message);
        return data;
    } catch (error) {
        log.error('Kesalahan registrasi user:', error.message || error);
        return null;
    }
};

export const loginUser = async (email, password, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/user/login';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({ email, password }),
            agent,
        });
        const data = await response.json();
        log.info('User berhasil login:', data.message);
        return data;
    } catch (error) {
        log.error('Kesalahan Login user:', error.message || error);
        return null;
    }
};

export async function getUserInfo(token, proxy) {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/user/details';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'GET',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            agent,
        });
        return await response.json();
    } catch (error) {
        log.error('Kesalahan mengambil informasi user:', error.message || error);
        return null;
    }
}

export const createUserProfile = async (token, payload, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/user/profile-creation';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify(payload),
            agent,
        });
        const data = await response.json();
        log.info('Profile berhasil dibuat:', payload);
        return data;
    } catch (error) {
        log.error('Kesalahan membuat profile:', error.message || error);
        return null;
    }
};

export const confirmUserReff = async (token, referral_code, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/access-code/referal';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({ referral_code }),
            agent,
        });
        const data = await response.json();
        log.info('konfirmasi refferal user berhasil:', data.message);
        return data;
    } catch (error) {
        log.error('Kesalahan mengkonfirmasi refferal user:', error.message || error);
        return null;
    }
};

export const getUserRef = async (token, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/referrals/stats';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'GET',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            agent,
        });
        return await response.json();
    } catch (error) {
        log.error('Kesalahan memeriksa status refferal:', error.message || error);
        return null;
    }
};

export const getEarnings = async (token, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/stats/epoch-earnings';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'GET',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            agent,
        });
        return await response.json();
    } catch (error) {
        log.error('Kesalahan memeriksa pendapatan:', error.message || error);
        return null;
    }
};

export const connect = async (token, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/user/widget-connect';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({ connected: true }),
            agent,
        });
        const data = await response.json();
        log.━━━━━━('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        log.info('User berhasil terkoneksi.');
        return data;
    } catch (error) {
        log.error(`Kesalahan update komeksi: ${error.message}`);
        return null;
    }
};

export const claimPoints = async (token, proxy) => {
    const agent = newAgent(proxy);
    const url = 'https://api.depined.org/api/referrals/claim_points';
    try {
        const response = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({}),
            agent,
        });
        const data = await response.json();
        log.info('Point berhasil diclaim.');
        return data;
    } catch (error) {
        log.error(`Kesalahan mengclaim point: ${error.message}`);
        return null;
    }
};
