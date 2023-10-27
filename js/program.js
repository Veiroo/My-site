{
    const button = document.querySelector(".button")

    button.addEventListener("click", () => {
        const motive = document.querySelector(".motive")
        const body = document.querySelector(".body")
        const navigation_items = document.querySelector(".navigation__items")
        const navigation_items0 = document.querySelector(".navigation__items0")
        const navigation_items1 = document.querySelector(".navigation__items1")
        const navigation_link0 = document.querySelector(".navigation__link0")
        const navigation_link1 = document.querySelector(".navigation__link1")
        const navigation_link2 = document.querySelector(".navigation__link2")
        const navigation_link3 = document.querySelector(".navigation__link3")
        const navigation_link4 = document.querySelector(".navigation__link4")
        const navigation_link5 = document.querySelector(".navigation__link5")
        const navigation_link6 = document.querySelector(".navigation__link6")

        button.classList.toggle("darkButton")
        body.classList.toggle("darkMotive")
        navigation_items.classList.toggle("darkBorder")
        navigation_items0.classList.toggle("darkBorder")
        navigation_items1.classList.toggle("darkBorder")
        navigation_link0.classList.toggle("darkLink")
        navigation_link1.classList.toggle("darkLink")
        navigation_link2.classList.toggle("darkLink")
        navigation_link3.classList.toggle("darkLink")
        navigation_link4.classList.toggle("darkLink")
        navigation_link5.classList.toggle("darkLink")
        navigation_link6.classList.toggle("darkLink")

        motive.innerText = body.classList.contains("darkMotive") ? "jasny" : "ciemny";
    })

}