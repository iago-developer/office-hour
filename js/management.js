const editButtons = [...document.querySelectorAll("td.edit")];
const deleteButtons = [...document.querySelectorAll("td.delete")];

editButtons.map((elements) => {
    elements.addEventListener("click", (event) => {
        window.alert("Erro ao redirecionar!");
    });
});

deleteButtons.map((elements) => {
    elements.addEventListener("click", (event) => {
        window.alert("Erro ao redirecionar!");
    });
});

