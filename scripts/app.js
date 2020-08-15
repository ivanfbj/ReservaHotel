class Header extends React.Component {
  render() {
    return (
      <header class="col-12 m-0 p-0">
        <div class="col-12 p-3">
          <h1 class="text-center text-white">Hoteles</h1>
          <p class="text-center text-white">
            Desde el martes,
            <b>1 de enero de 2019</b>
            hasta el miércoles,<b>2 de enero de 2019</b>
          </p>
        </div>
        <div id="filters" class="row p-2 m-0">
          <div class="form-group col-md-2 offset-md-1">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              <input class="form-control" type="date" name="" id="" />
            </div>
          </div>
          <div class="form-group col-md-2">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <input class="form-control" type="date" name="" id="" />
            </div>
          </div>
          <div class="form-group col-md-2">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-globe"></i>
              </span>
              <select class="form-control" name="" id=""></select>
            </div>
          </div>
          <div class="form-group col-md-2">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-dollar-sign"></i>
              </span>
              <select class="form-control" name="" id=""></select>
            </div>
          </div>
          <div class="form-group col-md-2">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-bed"></i>
              </span>
              <select class="form-control" name="" id=""></select>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
