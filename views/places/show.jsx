const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt="" />
            <div>
                <h2>Rating</h2>
                <h3>currently Unrated</h3>
            </div>
            <div>
                <h2> Description</h2>
                <h3> {data.place.city},{data.place.state} </h3>
                <h3> {data.place.cuisines} </h3>
            </div>
            <div>
                <h2>Comments</h2>
                <h4>No comments yet!</h4>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show