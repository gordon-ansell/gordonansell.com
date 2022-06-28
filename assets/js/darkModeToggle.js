const toggle1 = document.getElementById("dmtoggle1");
const toggle2 = document.getElementById("dmtoggle2");
const theme = window.localStorage.getItem("theme");


if (theme === "dark") {
    document.documentElement.classList.add("dark")
} else if (theme === "light") {
    document.documentElement.classList.add("light")
} else {
    if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.add("light")
    }
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem("theme", "dark");
    } else if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem("theme", "light");
    } else {
        if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("light")
            window.localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark")
            window.localStorage.setItem("theme", "dark");
        }
    }
}


// Event listener stops when the change theme button is clicked
toggle1.addEventListener("click", () => {
    toggleDarkMode();
});

toggle2.addEventListener("click", () => {
    toggleDarkMode();
});

