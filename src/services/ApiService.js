export const getBandColors = async () => {
    const resp = await fetch('http://localhost:3000/get-band-colors');
    return resp.json();
}

export const calculateOhms = async (data) => {
    const resp = await fetch('http://localhost:3000/calculate-ohms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return resp.json();
}