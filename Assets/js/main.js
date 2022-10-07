const menus = document.querySelectorAll("nav a");

// remove bottom border fronm all menus
function remove_style_to_all_menu(){
    for (let menu of menus) {        
            menu.classList.add("no-bottom-border");
    }    
}

// toggle class
function remove_add_class_to_menu(element, formerclass, newclass){
    element.classList.remove(formerclass);
    element.classList.add(newclass);
}


// activate bottom border for the clicked menu and reove style to others
function active_style_to_menu(){
    for (let menu of menus) {                
        menu.addEventListener("click", (menu) => {
            remove_style_to_all_menu()           
            remove_add_class_to_menu(menu.target, "no-bottom-border", "bottom-border")
        });
    }
    
}

// call function

active_style_to_menu();