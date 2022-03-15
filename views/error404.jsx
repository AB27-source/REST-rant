const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img className="imgClass" src="/images/spider-sense.png" alt="Spider-Man spider-sense" />
                <div>
                  Photo from <a href="https://comicvine.gamespot.com/a/uploads/scale_small/8/84205/2309538-spider_sense_by_spideray_d4mzxm8.png">Comic Vine</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404