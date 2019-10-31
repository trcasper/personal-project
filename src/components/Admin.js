import React, { Component } from "react";
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      productName: "",
      description: "",
      price: 0
    };
  }
  render() {
    return (
      <div className="Admin">
        <div className="AdminTitle">Admin</div>
        <div className="AdminContainer">
          <div className="InputContainer">
            <div className="ImagePreview"></div>
            <p>Image Preview</p>
            <div className="InputBoxOne">
              <div className="InputBoxes">
                <input 
                    placeholder="Image Url" />
                <input placeholder="Product Name"/>

                <input placeholder="Description"/>
                <input placeholder="Price"/>
              </div>
              <div className="InputButtons">
                <button>Save</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
