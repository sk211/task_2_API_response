fetch("https://gorest.co.in/public/v1/users")
    .then((data) => {
        return data.json()

    }).then((compliteDate) => {
        console.log(compliteDate.data)
        // document.getElementById('root').innerHTML = compliteDate.data[0].name
        let data1 = '';
        compliteDate.data.map((values) => {
            console.log(values.length)
            data1 += `
            <div class="col-md-3">
            <div class="card" style="width: 18rem;">
            <h5>${values.length}</h5>
            <div class="card-body">
              <h5 class="card-title fb">User Id :${values.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">User Name:${values.name}</h6>
              <p class="card-text">User Email :${values.email}</p>
              <p class="card-text">User Gender  :${values.gender}</p>
              <p class="card-text">User Active  :${values.status}</p>
            
            </div>
          </div>
          </div>`
        })
        document.getElementById('root').innerHTML = data1
    }).catch((error) => {
        console.log(error)
    })