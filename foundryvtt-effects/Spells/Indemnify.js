let target = Array.from(game.user.targets)[0]

if (Tagger.hasTags(target, "Indemnify")){
    Tagger.removeTags(target, "Indemnify")
    Sequencer.EffectManager.endEffects({name: "Indem", object: target})
    Sequencer.EffectManager.endEffects({name: "Indem_Beam"})
} else {

    Tagger.addTags(target, "Indemnify")

new Sequence()

.effect()
    .file("jb2a.dodecahedron.rune.below.dark_greenpurple")
    .name("Indem")
    .scaleToObject(3)
    .fadeIn(2000, {ease: "easeInOutSine"})
    .rotateIn(180, 3000, {ease: "easeInOutSine"})
    .atLocation(target)
    .attachTo(target)
    .belowTokens()
    .zIndex(0)
    .persist()

.effect()
    .file("jb2a.energy_beam.reverse.dark_red")
    .name("Indem_Beam")
    .fadeIn(2000, {ease: "easeInOutSine"})
    .atLocation(token)
    .attachTo(token)
    .belowTokens()
    .stretchTo(target, {attachTo: true})
    .persist()
    .zIndex(1)


.play();
}