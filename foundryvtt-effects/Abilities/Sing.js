if (Tagger.hasTags(token, "Singing")){
    await Tagger.removeTags(token, "Singing")
    await Sequencer.EffectManager.endEffects({name: "Sing", object: token})

new Sequence()

.animation()
    .on(token)
    .opacity(1)

.play();

} else {

Tagger.addTags(token, "Singing")

new Sequence()

.effect()
    .file("jb2a.music_notations.crotchet.blue")
    .atLocation(token)
    .attachTo(token)
    .scale(0.2, 0.5)
    .name("Sing")
    .spriteOffset({x: 10, y: -70})
    .delay(500)
    .persist()

.effect()
    .file("jb2a.music_notations.beamed_quavers.blue")
    .atLocation(token)
    .attachTo(token)
    .scale(0.2, 0.5)
    .name("Sing")
    .spriteOffset({x:-15, y: -70})
    .delay(1500)
    .persist()

.animation()
    .on(token)
    .opacity(0)

.effect()
    .name("Sing")
    .from(token)
    .atLocation(token)
    .attachTo(token, {bindAlpha: false})
    .anchor({ x: 0.5, y: 0.5 })
    .belowTokens()
    .loopProperty("sprite", "position.y", {values:[0, 0, -20, 0, 0, -20, 0, 0, -20, 0, -20], duration: 300, delay: 120, pingPong: true})
    .waitUntilFinished()
    .persist()

    .animation()
    .on(token)
    .opacity(0)

.play()

}