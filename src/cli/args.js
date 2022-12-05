const parseArgs = () => {
    const argum = process.argv.slice(2)
    const result = argum.reduce((acc, item, index) => {
        const value = argum[index + 1];
        item.startsWith('--') && value
        
            && acc.push(`${item.slice(2)} is ${value}`)

        return acc;
    }, []).join(', ')
    console.log(result);

    // process.stdout.write('Введите, запрос в формате: --propName value--prop2Name value2\n');
    // process.stdin.on('data', (data) => {
    //     const flagIndex = data.toString().indexOf('--')
    //     if (flagIndex !== -1) {
    //         const result = data.toString().split('--').map((item) => item.split(' ').join(" is ")).join(', ').trim().slice(2)
    //         console.log(result);
    //         process.exit()
    //     } else {
    //         process.stdout.write('Введите, запрос в формате!!!: --propName value--prop2Name value2\n');
    //     }
    // })

};

parseArgs();