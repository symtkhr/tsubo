const { execSync } = require('child_process');
const getfile = (fname) => require('fs').readFileSync(fname, 'utf8');

const pages = `
frontal_bone.html
parietal_bone.html
occipital_bone.html
temporal_bone.html
zygomatic_bone.html
maxilla.html
mandible.html
palatine_bone.html
lacrimal_bone.html
sphenoid.html
ethmoid.html
hyoid_bone.html
vertebral_column.html
vertebra.html
cervical_vertebraei.html
atlas.html
axis.html
thoracic_vertebrae.html
lumbar_vertebrae.html
sacrum.html
coccyx.html
thorax.html
sternum.html
rib.html
first_rib.html
second_rib.html
clavicle.html
scapula.html
humerus.html
radius.html
ulna.html
carpals.html
metacarpals.html
phalanges_of_hand.html
hip_bone.html
ilium.html
ischium.html
pubis.html
pelvis.html
femur.html
patella.html
tibia.html
fibula.html
tarsals.html
talus.html
calcaneus.html
navicular.html
cuboid.html
metatarsals.html
metatarsals_foot.html
`.split("\n").filter(v=>v);

if (0) {
    pages.map(url => execSync(`sleep 1; wget 'https://www.roundflat.jp/yougo/${url}'`));
}

pages.map(p => {
    let s = getfile(`./html/` + p);
    let t = s.split("<table").pop().split("</table>").shift();
    console.log(t.split("\n").map(v=>v.trim()).join("")
                .split("<!--item START-->"));
});
