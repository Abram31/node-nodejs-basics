const parseEnv = () => {
    const result = Object.entries(process.env).reduce((acc, item) => {
        if (item[0].startsWith('RSS_')) {
            acc.push(`${item[0]}=${item[1]}`)
        }
        return acc
    },[]).join('; ');

    console.log(result);
};

parseEnv();