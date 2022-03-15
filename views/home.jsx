const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img className="imgClass" src="/images/iced-coffee-in-glass.jpg" alt="Iced Coffee in Glass on Table from unsplash" />
                <div>
                  Photo by <a href="https://unsplash.com/@demidearest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Demi DeHerrera</a> on <a href="https://unsplash.com/@demidearest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home