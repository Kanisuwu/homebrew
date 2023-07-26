let target = Array.from(game.user.targets)[0];

if (Tagger.hasTags(target, "Sanctuary")){
    await Tagger.removeTags(target, "Sanctuary")
    await Sequencer.EffectManager.endEffects({name: "Sanc", object: target})
}else{

Tagger.addTags(target, "Sanctuary")

new Sequence()

    .effect()
    .file("jb2a.extras.tmfx.outpulse.circle.01.normal")
    .atLocation(target)
    .scaleToObject(3)
    .fadeOut(800)
    .zIndex(3)
    .waitUntilFinished(-1000)

    .effect()
    .name("Sanc")
    .from(target)
    .duration(2000)
    .atLocation(target)
    .attachTo(target)
    .fadeIn(500)
    .filter("Blur", {strength:8, blur:2, quality:4})
    .opacity(0.7)
    .persist()

    .effect()
    .name("Sanc")
    .file("jb2a.energy_field.02.above.blue")
    .atLocation(target)
    .attachTo(target)
    .scaleToObject(1.75)
    .persist()

.play()
}