let target = Array.from(game.user.targets)[0]

new Sequence()

.effect()
    .file("jb2a.energy_strands.in.green.01.0")
    .atLocation(target)
    .fadeIn(500, {ease: "easeInCubic"})
    .attachTo(target)
    .scaleToObject(2)
    .rotateIn(180, 2000, {ease: "easeInOutSine"})
    .waitUntilFinished(-200)

.effect()
    .file("jb2a.cure_wounds.400px.blue")
    .atLocation(target)
    .attachTo(target)
    .scaleToObject(2)
    .filter("ColorMatrix", {brightness: 1, contrast: 0.5, saturate: 0.6})

.play()