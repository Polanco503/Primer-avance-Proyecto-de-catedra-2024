import { Plant } from "./domain/data-type-structure"

class LocalPlantStorage {

    plantlist: Plant[]
    constructor() {
        // Cargar datos del localStorage al inicializar la instancia
        this.plantlist = this.loadPlantsFromLocalStorage();
    }

    addPlant(plant: Plant) {
        this.plantlist.push(plant);
        // Guardar la lista actualizada en el localStorage
        this.savePlantsToLocalStorage(this.plantlist);
    }

    deletePlant(plantID: string) {
        const indice = this.plantlist.findIndex(elemento => elemento.id === plantID);
        if (indice !== -1) {
            this.plantlist.splice(indice, 1);
            // Guardar la lista actualizada en el localStorage
            this.savePlantsToLocalStorage(this.plantlist);
        }
    }

    // Método para guardar la lista de plantas en el localStorage
    private savePlantsToLocalStorage(plants: Plant[]) {
        localStorage.setItem('plants', JSON.stringify(plants));
    }

    // Método para cargar la lista de plantas desde el localStorage
    private loadPlantsFromLocalStorage(): Plant[] {
        const plantsJSON = localStorage.getItem('plants');
        if (plantsJSON) {
            return JSON.parse(plantsJSON);
        }
        return []; // Si no hay datos en el localStorage, devolver un arreglo vacío
    }

}

export default new LocalPlantStorage();
