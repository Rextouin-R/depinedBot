import chalk from 'chalk';

const flat = {
    log: (level, message, value = '') => {
        const now = new Date().toLocaleString();

        const colors = {
            strip: chalk.white,
        };

        const color = colors[level] || chalk.white;
        const levelTag = `[ ${level.toUpperCase()} ]`;
        const timestamp = `[ ${now} ]`;

        const formattedMessage = `${chalk.white("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")}`;

        let formattedValue = ` ${chalk.green(value)}`;
        if (level === 'error') {
            formattedValue = ` ${chalk.red(value)}`;
        } else if (level === 'warn') {
            formattedValue = ` ${chalk.yellow(value)}`;
        }
        if (typeof value === 'object') {
            const valueColor = level === 'error' ? chalk.red : chalk.green;
            formattedValue = ` ${valueColor(JSON.stringify(value))}`;
        }

        console.log(`${formattedMessage}${formattedValue}`);
    },

    strip: (message, value = '') => flat.log('strip', message, value),
};

export default flat;
