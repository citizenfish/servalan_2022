'use strict'
const {Level} = require('level')
const subLevel = require('level-sublevel')
const rTree = require('rtree')
const homedir = require('os').homedir();


module.exports = class localStore {

    constructor(path) {
        this.path = `${homedir}/.servalan/servalan.db`
        this.dataDB = new subLevel(new Level(this.path, { valueEncoding: 'json' }))
        this.indexDB = this.dataDB.sublevel('index', { valueEncoding: 'json' })
        this.rtree = rTree();       
      
    }


    async getIndex () {
      this.indexDB.get('geoJSONindex', (error, value) => {
         if(error) {
            console.log('Index not set')
         }else {
            console.log('Index set')
            this.rtree.setTree(value)
         }
      
      })
    }

    dbLocation (){
      return this.path
    }

     async saveGeojson (name, geojson)  {

        this.rtree.geoJSON(geojson)
        this.indexDB.put('geoJSONindex', this.rtree.getTree(), (err) => {
         if(err) {
            console.log(err)
         } else {
            //console.log(this.rtree.getTree())
            console.log('NEW INDEX SAVED')
         }
         
        })
        return {}
     }   
    
     async getGeojson(bbox, name = '') {
        console.log(`Get Geojson ${bbox}, ${name}`)

        let results = this.rtree.bbox(bbox || []);
        return results
     }

} 
