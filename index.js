import inquirer from "inquirer";
class Tea {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Ingredent {
    Teaa = [];
    Kahwa;
    addTea(obj) {
        this.Teaa.push(obj);
    }
}
const Ingredents = new Ingredent();
const cafeStart = async (Ingredents) => {
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Which type of Tea do you want?",
        choices: ["Strong Tea", "Kahwa", "Kashmiri Tea", "Cardamom Tea", "Green Tea", "Exit"]
    });
    if (ans.select == "Strong Tea") {
        console.log("Enjoy it!");
    }
    else if (ans.select == "Kahwa") {
        const ans = await inquirer.prompt({
            name: "Kahwa",
            type: "input",
            message: "Enter the flavour you want in your kahwa",
        });
        const Kahwa = Ingredents.Teaa.find(val => val.name == ans.Kahwa);
        if (!Tea) {
            const name = new Tea(ans.Kahwa);
            Ingredents.addTea(name);
            console.log(`Here is your ${name.name}, Enjoy it!`);
            console.log("Flavour added.");
            console.log("Flavour List:");
            console.log(Ingredents.Teaa);
        }
        else {
            console.log(`Here is your ${Tea.name}, Enjoy!`);
            console.log("Existing flavour list:");
            console.log(Ingredents.Teaa);
        }
    }
    if (ans.select == "Kashmiri Tea") {
        console.log("Enjoy it!");
    }
    if (ans.select == "Cardamom Tea") {
        console.log("Enjoy it!");
    }
    if (ans.select == "Green Tea") {
        console.log("Enjoy it!");
    }
    else if (ans.select == "Exit") {
        console.log("Exiting the cafe!...");
    }
};
cafeStart(Ingredents);
