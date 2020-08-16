import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'

class DefaultHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     
  }
  }


  render() {
    $(window).scroll(function() {
      // 100 = The point you would like to fade the nav in.

      if ($(window).scrollTop() > 70) {

          $('header').addClass('is-sticky');

      } else {

          $('header').removeClass('is-sticky');

      };
  });
    return (
      <header>
              <div class="nav-menu">
                    <div class="bg transition">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <a class="navbar-brand" href="https://github.com/Arihantjain1">GitHub</a>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="icon-menu"></span>
                                        </button>
                                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                            <ul class="navbar-nav">
                                                <li><a class="navbar-brand" href="https://medium.com/@jain12346460">Medium</a></li> 
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </header>
    );
  }

}

function mapStateToProps(state) {
  return {
      
  }
}

export default connect(mapStateToProps)(DefaultHeader);
