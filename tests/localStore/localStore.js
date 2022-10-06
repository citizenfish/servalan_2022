const localStore = require('../../localStore/localStore')


let g1 = {
    type:"FeatureCollection",
    features:[
        {
            type:"Feature",
            geometry:{
                type:"Point",
                coordinates:[100,1]
            },
            properties:{
                prop0:"value0"
            }
        },
        {
            type:"Feature",
            geometry:{
                type:"LineString",
                coordinates:[
                    [100,0],
                    [101,1]
                ]
            },
            properties:{
                prop0:"value0"
            }
        }
    ]
}

let g2 = {
    type:"FeatureCollection",
    features:[
        {
            type:"Feature",
            geometry:{
                type:"Point",
                coordinates:[200,2]
            },
            properties:{
                prop0:"value2"
            }
        },
        {
            type:"Feature",
            geometry:{
                type:"LineString",
                coordinates:[
                    [200,2],
                    [201,3]
                ]
            },
            properties:{
                prop0:"value2"
            }
        }
    ]
}
let bbox = [[100,0],[101,1]]
let s = new localStore()
s.getIndex().then(
    s.saveGeojson('TEST', g1)
).then (
    s.saveGeojson('TEST', g2)
)

//s.saveGeojson('TEST', g2)
//console.log(s.dbLocation())

//console.log(JSON.stringify(s.getGeojson(bbox)))

