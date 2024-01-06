class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, children } = this.props;
    return <h1 className={className}>{children}</h1>;
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, children, className, onClick } = this.props;
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}

class EditeurText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cols, className, rows, onChange, value } = this.props;
    return (
      <textarea
        cols={cols}
        rows={rows}
        className={className}
        onChange={onChange}
        value={value}
      ></textarea>
    );
  }
}

class AfficheText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, value, children } = this.props;
    return (
      <div className="container-fluid">
        <div className="row d-flex flex- justify-content-md-start gap-5">
          <EditeurText
            className="col-12 col-md-7  bg-secondary mx-sm-auto mx-md-0 rounded-3 text-wrap "
            cols="40"
            rows="12"
            value={value}
            onChange={onChange}
          />
          <AfficheText
            className="col-12 col-md-3 d-sm-block aff text-dark   mx-sm-auto mx-md-0 bg-white rounded-3"
            children={value}
          />
        </div>
      </div>
    );
  }
}

class Editeur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saisie: "",
    };
  }

  handleChange = (e) => {
    this.setState({ saisie: e.target.value });
    console.log(this.state.saisie);
  };

  telechargerLeSaisie = () => {
    const { saisie } = this.state;

    if (saisie.trim()) {
      const fichierPdf = new jsPDF();
      fichierPdf.text(saisie, 15, 15);
      fichierPdf.save("your-markdown.pdf");
    }
  };

  render() {
    const { saisie, className } = this.state;
    return (
      <div className=" px-5 min-vh-100 bg-dark text-center py-5">
        <Title
          children="Markdown Editor"
          className="text-white text-center fs-5 mb-4 fw-blod"
        />
        <Title
          children="You can type in html tags as well"
          className="text-secondary text-center fs-5 mb-3"
        />
        <Section
          children={saisie}
          value={saisie}
          onChange={this.handleChange}
        />
        <Button
          className="mx-auto text-secondary my-5 bn border-0 rounded-3 fw-bold fs-5 p-2"
          children="Download Text"
          onClick={this.telechargerLeSaisie}
        />
      </div>
    );
  }
}

ReactDOM.render(<Editeur />, document.querySelector("#root"));
