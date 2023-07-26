const selected = canvas.tokens.controlled[0];

let config = {
    size: 1,
    icon: 'icons/skills/melee/strike-weapon-polearm-ice-blue.webp',
    label: 'Magic Teleportation',
    tag: 'Bless of the Raven Queen',
    t: 'circle',
    drawIcon: true,
    drawOutline: true,
    interval: token.data.width % 2 === 0 ? 1 : -1,
    rememberControlled: true, 
}

let position = await warpgate.crosshairs.show(config);
const dropScale = selected.w / canvas.grid.size * .35;

new Sequence()

.effect()
    .file("jb2a.misty_step.01.dark_black")
    .scaleToObject(2)
    .atLocation(token)
    .fadeOut(500)
    .zIndex(1)
    .wait(800)

.animation()
    .on(token)
    .opacity(0)

.effect()
    .file("jb2a.misty_step.02.dark_black")
    .scaleToObject(2)
    .atLocation(position)
    .zIndex(2)
    .wait(1500)

.animation()
    .on(token)
    .teleportTo(position)
    .snapToGrid()
    .offset({ x: -1, y: -1 })

.animation()
    .on(token)
    .opacity(1)

.play()