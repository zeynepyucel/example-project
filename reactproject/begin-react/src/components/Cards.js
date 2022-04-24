import React from 'react';
import posts from './resources/posts.json';

import IMAGES from '../images.js';

const Card = () => {

  return (
    <div>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> {posts.map(record => {
                return (
                  <div className="box" key={record.id}>
                    <strong> {record.title}</strong><br />

                    {
                      IMAGES.map((item) =>
                        <div key={item.id}>
                          <img src={item.image} className="image" alt="" width = "400" height = "200"/>

                        </div>
                      )
                    }

                  </div>
                )
              }
              )} </h5>

            </div>
            )
          </div>

        </div>

      </div>
    </div>
  );

};

export default Card;