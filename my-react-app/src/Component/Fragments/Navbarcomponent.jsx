const Navbarcomponent = () => {
  return (
    <>
      <div className=" container pt-3  ">
        <nav class="d-flex space-between ">
          <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold" href="#">
              Tour Tech
            </a>
          </div>
          <button className="bg-transparent px-3 py-1 text-white border rounded">
            Login
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbarcomponent;
