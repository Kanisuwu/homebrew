let target = Array.from(game.user.targets)[0];

if (Tagger.hasTags(target, "Blessing")){
    Tagger.removeTags(target, "Blessing")
    Sequencer.EffectManager.endEffects({name: "Bless", object: target})
}else{

Tagger.addTags(target, "Blessing")

new Sequence()

.effect()
.from(target)
.duration(2000)
.atLocation(target)
.fadeIn(2000)
.filter("ColorMatrix", {saturate:-1, brightness:10})
.filter("Blur", { blurX: 5, blurY: 10 })
.opacity(0.5)
.waitUntilFinished(-1500)

.effect()
    .file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
    .atLocation(target)
    .scaleToObject(3.25)
    .delay(1200)

.effect()
    .name("Bless")
    .file("jb2a.bless.200px.intro.yellow")
    .atLocation(target)
    .scaleToObject(1.7)
    .fadeIn(1000)
    .zIndex(2)
    .wait(4500)

.effect()
.name("Bless")
.file("jb2a.particles.outward.greenyellow.01.03")
.atLocation(target)
.scaleToObject(1)
.opacity(0.75)
.fadeIn(250, {ease: "easeInOutSine"})
.attachTo(target)
.zIndex(1)
.persist()


.effect()
.name("Bless")
.file("jb2a.bless.200px.loop.yellow")
.atLocation(target)
.scaleToObject(1.7)
.attachTo(target)
.zIndex(0)
.fadeIn(250, {ease: "easeInOutSine"})
.persist()

.play()
}