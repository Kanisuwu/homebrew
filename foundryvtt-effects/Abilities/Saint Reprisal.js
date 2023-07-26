let target = Array.from(game.user.targets)[0]
let file_effect = ""
let file_crack = ""

const result = await warpgate.menu({
    inputs: [{
        label: "Radiant",
        type: "radio",
        options: "group1",
        value: true,
        default: true
    },
    {
        label: "Necrotic",
        type: "radio",
        options: "group1",
        value: false
    }],
    }, {
        title: 'Saint Reprisal',
        options: {
          width: '200px',
          height: '100%',
        }   
    }
)

if (result.inputs[0]){
    file_effect = "jb2a.divine_smite.caster.reversed.blueyellow"
    file_crack = "jb2a.impact.ground_crack.orange.02"
}else{
    file_effect = "jb2a.divine_smite.caster.reversed.dark_red"
    file_crack = "jb2a.impact.ground_crack.dark_red.02"
} 
new Sequence()

    .effect()
        .file("jb2a.extras.tmfx.outpulse.circle.02")
        .belowTokens()
        .atLocation(token)
        .attachTo(token)
        .scaleToObject(3)
    .effect()
        .file(file_effect)
        .atLocation(token)
        .attachTo(token)
        .scaleToObject(2)
        .waitUntilFinished(-1300)
    .canvasPan()
        .shake({duration: 200, frequency: 75})
    .effect()
        .file(file_crack)
        .belowTokens()
        .atLocation(token)
        .scaleToObject(3)
.play()