const Database = require('./db')
const SaveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela
    await SaveOrphanage(db, {
        lat: "-3.74346",
        lng: "-38.4837",
        name: "Casa de Acolhimento Casa de Jeremias",
        about: "Organização não governamental em fortaleza, Ceará.",
        whatsapp: "(85) 932627220",
        images: [
            "https://images.unsplash.com/photo-1603138461768-be254fb9a9ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1603138461768-be254fb9a9ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 18h até 8h",
        open_on_weekends: "1"
    })

    /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-3.7749680",
            "-38.5727036",
            "Tia Julia",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "(85) 999988776",
            "https://images.unsplash.com/photo-1603138461768-be254fb9a9ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas: Das 18h até 8h",
            "1"
        );
    `)

    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-3.734806",
            "-38.5588647",
            "Instituto Cristo Rei",
            "O Cristo Rei é uma instituição que cuida de crianças em situação de vulnerabilidade social por mais de 60 anos.",
            "(85) 988776609",
            "https://images.unsplash.com/photo-1603138461764-d2358b5db8b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas: Das 18h até 8h",
            "0"
        );
    `)*/

    // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;")
    console.log(selectedOrphanages)
    
    // Consultar somento 1 orphanato pelo id
    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(selectedOrphanage)

    // Deletar um dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = 4"))
})