const obtenerProd = async () => {
    try {
        const response = await fetch("./productos/data.json");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    };
};
