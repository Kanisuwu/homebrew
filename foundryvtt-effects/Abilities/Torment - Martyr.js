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
        title: 'Torment Type',
        options: {
          width: '200px',
          height: '100%',
        }   
    }
)

if (result.inputs[0]){
    file_effect = "jb2a.divine_smite.target.orange"
    file_crack = "jb2a.impact.ground_crack.orange.03"
}else{
    file_effect = "jb2a.divine_smite.target.dark_red"
    file_crack = "jb2a.impact.ground_crack.03.dark_red"
} 

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.inpulse.circle.01.fast")
        .belowTokens()
        .atLocation(target)
        .scaleToObject(3)
    .effect()
        .file(file_effect)
        .atLocation(target)
        .attachTo(target)
        .scaleToObject(2)
    .canvasPan()
        .atLocation(target)
        .shake({duration: 500, frequency: 50})
    .effect()
        .file(file_crack)
        .belowTokens()
        .atLocation(target)
        .scaleToObject(3)
.play()
