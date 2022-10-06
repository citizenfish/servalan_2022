const rTree = require('rtree')

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

rtree = rTree()

console.log(rtree.getTree())

rtree.geoJSON(g1)

console.log(rtree.getTree())


rtree.geoJSON(g2)

console.log(rtree.getTree())