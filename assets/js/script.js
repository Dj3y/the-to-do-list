const tasks = ["Faire les courses", "Nettoyer la maison", "Planifier les repas de la semaine", "Repassage", "Aller chercher les vêtements au nettoyage à sec", "Finir les exercices en JavaScript", "Mette à jour l'agenda du mois", "Prendre rendez-vous chez le dentiste", "Aller à la salle de sport", "Planifier les prochaines vacances", "Organiser sortie avec les filles", "Préparer la fête surprise d'anniversaire", "Acheter cadeau d'anniversaire", "Arroser les plantes"];

// Créer les ul et li pour la liste des tâches
// Affichage des tâches dans le div avec nom de classe: task-list
// function createListTasks (){
//     taskList.appendChild(ul);
//     for (task of tasks){
//         const li = document.createElement("li");
//         ul.appendChild(li);
//         li.innerHTML = task;
//     }
// }
const taskList = document.querySelector(".task-list");
const ul = document.querySelector(".ul-list");

// Récuperer les données encodé dans l'input et ajouter à la fin de la liste
function addTask(){
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    li.appendChild(checkBox);
    checkBox.addEventListener('click',taskDone);
    const inputValue = document.getElementById("tasks").value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.querySelector(".ul-list").appendChild(li);
    document.getElementById("tasks").value = "";
    // création du button pour supprimer une tâche
    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("name", "delete");
    deleteBtn.setAttribute("value", "delete");
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteTask);
}

// // Marquer une tâche terminé
// // const list = document.querySelector(".ul-list");
 function taskDone(event){
        event.target.classList.toggle('done');
}

// fonction pour supprimé un élément
function deleteTask(ev){
    const task = ev.target.parentElement;
    ul.removeChild(task);
}

// Appel des foctions 
// createListTasks();
// deleteTask();


