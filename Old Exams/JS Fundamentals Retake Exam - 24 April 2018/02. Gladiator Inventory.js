function gladiatorInventory(arr) {
    let inventory = arr[0].split(" ");

    for (let i = 1; i < arr.length; i++) {
        if(arr[i][0] === "Fight!") {
            break;
        }
        let command = arr[i].split(" ")[0];
        let equipment = arr[i].split(" ")[1];

        switch (command) {
            case "Buy":
                if(!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case "Trash":
                let index = inventory.indexOf(equipment);
                if(index > -1) {
                    inventory.splice(index,1);
                }
                break;
            case "Repair":
                if(inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let currentEquip = inventory.splice(index,1);
                    inventory.push(currentEquip[0]);
                }
                break;
            case "Upgrade":
                let currentEquipment = equipment.split("-")[0];
                let currentUpgrade = equipment.split("-")[1];

                if(inventory.includes(currentEquipment)) {
                    let index = inventory.indexOf(currentEquipment);
                    let currentElement = inventory[index];

                    for (let j = inventory.length - 1; j >= index + 1; j--) {
                        inventory[j+1] = inventory[j];
                    }
                    inventory[index + 1] = currentElement + ":" + currentUpgrade;
                }
                break;
        }
    }
    console.log(inventory.join(" "));
}
//gladiatorInventory(['SWORD Shield Spear',
//    'Buy Bag',
//    'Trash Shield',
//    'Repair Spear',
//    'Upgrade SWORD-Steel',
//    'Fight!'
//]);

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
    'Fight!'
]);