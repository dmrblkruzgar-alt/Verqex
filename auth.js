function register() {
    const user = document.getElementById("username").value;

    if (!user) {
        alert("Kullanıcı adı gir!");
        return;
    }

    // Kullanıcıyı kaydet
    localStorage.setItem("verqex_user", user);

    // Otomatik kanal oluştur
    const channel = {
        name: user + "'ın Kanalı",
        id: Date.now()
    };

    localStorage.setItem("verqex_channel", JSON.stringify(channel));

    // Ana sayfaya yönlendir
    window.location.href = "home.html";
}

function login() {
    const user = document.getElementById("username").value;

    if (!user) {
        alert("Kullanıcı adı gir!");
        return;
    }

    localStorage.setItem("verqex_user", user);
    window.location.href = "home.html";
}
