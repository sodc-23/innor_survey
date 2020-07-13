import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Select, { components }  from "react-select";
import { connect } from "react-redux";
import {dispatchchangeQuestion} from "../../actions/questionActions";

const availabletype = ["EM", "PH", "TX", "WS", "HF"];

const question_item = (type) => {
    switch (type) {
        case "MC":
        return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9ZM0 15.5C0 17.9853 2.01472 20 4.5 20C6.98528 20 9 17.9853 9 15.5C9 13.0147 6.98528 11 4.5 11C2.01472 11 0 13.0147 0 15.5ZM11 15.5C11 17.9853 13.0147 20 15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5ZM11 4.5C11 6.98528 13.0147 9 15.5 9C17.9853 9 20 6.98528 20 4.5C20 2.01472 17.9853 0 15.5 0C13.0147 0 11 2.01472 11 4.5ZM15.5 7C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2C14.1193 2 13 3.11929 13 4.5C13 5.88071 14.1193 7 15.5 7ZM7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5ZM15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18ZM7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13C5.88071 13 7 14.1193 7 15.5Z" fill="#D14CDE"/>
    </svg>);
        break;

        case "FB":
        return (<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 20H3C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H18V16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18V20ZM15 17C15 16.6494 15.0602 16.3128 15.1707 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H15.1707C15.0602 17.6872 15 17.3506 15 17ZM3 2H16V14H3C2.64936 14 2.31278 14.0602 2 14.1707V3C2 2.44772 2.44772 2 3 2Z" fill="#006799"/>
    </svg>);
        break;

        case "TX":
        return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 19.1046 0.89543 20 2 20H15.4142L20 15.4142V2C20 0.89543 19.1046 0 18 0H2C0.89543 0 0 0.89543 0 2V18ZM2 2H18V13H15C13.8954 13 13 13.8954 13 15V18H2V2ZM15 15H17.5858L15 17.5858V15ZM5 13V15H11V13H5ZM5 11V9H15V11H5ZM5 5V7H15V5H5Z" fill="#95BB54"/>
    </svg>);
        break;

        case "EM":
        return (<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H20C21.1046 0 22 0.89543 22 2V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM2 6.61811V16H20V6.61853L11 11.1185L2 6.61811ZM2 4.38199L11 8.88245L20 4.38247V2H2V4.38199Z" fill="#6C858E"/>
        </svg>);
        break;

        case "PH":
        return (<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.85651 6.3379C10.3746 5.63969 10.5604 4.90384 9.97444 4.25431C8.65949 2.41433 7.77515 1.27649 7.22044 0.728537C6.16589 -0.313196 4.43112 -0.172285 3.51779 0.727647C3.02723 1.21101 2.86116 1.377 2.35747 1.88861C-0.448184 4.69577 1.26285 10.63 5.81139 15.183C10.3589 19.735 16.2926 21.4469 19.1041 18.6338C19.5689 18.1858 19.9624 17.792 20.2728 17.464C21.1678 16.518 21.3037 14.8597 20.2669 13.7824C19.7354 13.2301 18.6503 12.3885 16.7329 11.0169C16.1457 10.4918 15.4494 10.6056 14.811 11.0244C14.504 11.2259 14.2805 11.4297 13.8585 11.8521L13.0923 12.6187C12.9914 12.7197 11.621 12.0334 10.2907 10.7018C8.95972 9.36953 8.2739 7.99906 8.37435 7.89862L9.14112 7.13142C9.27499 6.99742 9.339 6.93254 9.42108 6.84627C9.59209 6.66654 9.73368 6.50344 9.85651 6.3379ZM14.5057 14.0329L15.2721 13.2661C15.5044 13.0337 15.6549 12.8907 15.7773 12.7922C17.457 13.9984 18.4297 14.7568 18.8271 15.1697C19.0656 15.4176 19.0286 15.8699 18.8212 16.089C18.5342 16.3924 18.1613 16.7655 17.7037 17.2068C15.8857 19.0256 11.0959 17.6437 7.22513 13.7691C3.35315 9.89332 1.97188 5.10279 3.7762 3.29748C4.27786 2.78798 4.4368 2.62912 4.92035 2.15265C5.10166 1.97401 5.59552 1.93389 5.81608 2.15176C6.24314 2.57364 7.03534 3.58799 8.20071 5.21133C8.14038 5.28623 8.06503 5.37087 7.97333 5.46724C7.90603 5.53798 7.84996 5.59481 7.72738 5.71751L6.96136 6.48396C5.65821 7.787 6.76802 10.0047 8.87697 12.1157C10.9845 14.2253 13.203 15.3364 14.5057 14.0329Z" fill="#FBA03A"/>
        </svg>);
        break;

        case "RD":
        return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z" fill="#39AD91"/>
        <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#39AD91"/>
        </svg>);
        break;

        case "RT":
        return (<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.81 6.62L20 7.24L14.55 11.97L16.18 19L10 15.27L3.82 19L5.46 11.97L0 7.24L7.19 6.63L10 0L12.81 6.62ZM6.24 15.67L10 13.4L13.77 15.68L12.77 11.4L16.09 8.52L11.71 8.14L10 4.1L8.3 8.13L3.92 8.51L7.24 11.39L6.24 15.67Z" fill="#28A8C5"/>
        </svg>);
        break;

        case "WS":
        return (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM2.06565 9.9074C2.35719 10.2805 3.16782 10.758 4.40826 11.1475C4.89668 11.3009 5.4316 11.4357 6.00555 11.5502C6.00186 11.3679 6 11.1844 6 11C6 7.67236 6.60556 4.6673 7.65455 2.64231C4.66412 3.84042 2.46628 6.59699 2.06565 9.9074ZM6.12914 13.6108C4.52334 13.3317 3.14644 12.9093 2.10296 12.3658C2.58837 15.5542 4.74677 18.1927 7.65455 19.3577C6.88867 17.8792 6.35916 15.8783 6.12914 13.6108ZM8.17891 13.8773C9.07601 13.9581 10.0209 14 11 14C11.9633 14 12.9124 13.9454 13.8253 13.8441C13.3742 17.4417 12.127 20 11 20C9.87647 20 8.63347 17.4574 8.17891 13.8773ZM13.9863 11.8045C13.0367 11.9275 12.028 12 11 12C9.95577 12 8.95341 11.9483 8.01531 11.8502C8.00522 11.5706 8 11.287 8 11C8 5.98399 9.5936 2 11 2C12.4064 2 14 5.98399 14 11C14 11.2713 13.9953 11.5397 13.9863 11.8045ZM15.8792 13.5269C15.6539 15.8289 15.1208 17.861 14.3454 19.3577C17.3046 18.1721 19.4876 15.4606 19.9212 12.1964C18.861 12.7479 17.4647 13.209 15.8792 13.5269ZM19.9285 9.86013C19.458 10.3883 17.9737 11.0157 15.9962 11.4541C15.9987 11.3035 16 11.1521 16 11C16 7.67236 15.3944 4.6673 14.3454 2.64231C17.3216 3.83471 19.5128 6.57077 19.9285 9.86013Z" fill="#F37350"/>
        </svg>);
        break;

        case "FU":
        return (<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4545 14.1818V16.3636H18.5455C21.5579 16.3636 24 13.9216 24 10.9091C24 8.16541 21.9743 5.89487 19.3368 5.51154C18.4091 2.29704 15.4458 0 12 0C9.44011 0 7.10074 1.27099 5.69443 3.32757C2.47312 3.74559 0 6.50048 0 9.81818C0 13.4331 2.9305 16.3636 6.54545 16.3636V14.1818C4.13548 14.1818 2.18182 12.2282 2.18182 9.81818C2.18182 7.47321 4.03564 5.54962 6.37053 5.45797L6.97163 5.43438L7.27245 4.91344C8.24105 3.2361 10.0281 2.18182 12 2.18182C14.674 2.18182 16.9422 4.11956 17.3792 6.72672L17.535 7.65619L18.4773 7.63706C18.4942 7.63677 18.5027 7.63662 18.5113 7.63654C18.5198 7.63645 18.5283 7.63642 18.5455 7.63636C20.3529 7.63636 21.8182 9.10161 21.8182 10.9091C21.8182 12.7166 20.3529 14.1818 18.5455 14.1818H17.4545ZM13.091 18.5455V11.361L15.5923 13.8623L17.1351 12.3195L12 7.18449L6.86502 12.3195L8.4078 13.8623L10.9091 11.361V18.5455H13.091Z" fill="#EACD38"/>
        </svg>);
        break;

        case "YN":
        return (<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 0H7C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14H17C20.866 14 24 10.866 24 7C24 3.13401 20.866 0 17 0ZM2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7C22 9.76142 19.7614 12 17 12H7C4.23858 12 2 9.76142 2 7ZM7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11ZM9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z" fill="#314085"/>
        </svg>);
        break;

        case "HF":
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70713 1.29297L1.29292 2.70718L5.35774 6.772C4.97908 7.08582 4.60434 7.42283 4.23373 7.78123C3.40451 8.58312 2.65433 9.43923 1.99393 10.2957C1.59543 10.8125 1.3125 11.2191 1.15759 11.4613L0.812988 12.0001L1.15759 12.5389C1.3125 12.7811 1.59543 13.1876 1.99393 13.7045C2.65433 14.5609 3.40451 15.417 4.23373 16.2189C6.66434 18.5695 9.27247 20.0001 12 20.0001C13.7209 20.0001 15.3943 19.4306 17.0056 18.4198L21.2929 22.7072L22.7071 21.293L2.70713 1.29297ZM15.5447 16.9589L14.032 15.4463C13.4365 15.7981 12.7418 16.0001 12 16.0001C9.79088 16.0001 8.00002 14.2092 8.00002 12.0001C8.00002 11.2583 8.20195 10.5636 8.55384 9.96811L6.77974 8.19401C6.39235 8.50642 6.0068 8.8488 5.62406 9.21893C4.86986 9.94828 4.18241 10.7328 3.57777 11.517C3.44718 11.6863 3.32651 11.8479 3.21619 12.0001C3.32651 12.1523 3.44718 12.3138 3.57777 12.4832C4.18241 13.2674 4.86986 14.0519 5.62406 14.7812C7.71751 16.8057 9.89495 18.0001 12 18.0001C13.1682 18.0001 14.3586 17.6323 15.5447 16.9589ZM10.0678 11.482C10.0236 11.6473 10 11.8209 10 12.0001C10 13.1046 10.8955 14.0001 12 14.0001C12.1792 14.0001 12.3528 13.9765 12.5181 13.9323L10.0678 11.482ZM20.0981 15.891L18.6838 14.4768C19.318 13.8357 19.9009 13.1593 20.4223 12.4832C20.5529 12.3138 20.6735 12.1523 20.7839 12.0001C20.6735 11.8479 20.5529 11.6863 20.4223 11.517C19.8176 10.7328 19.1302 9.94828 18.376 9.21893C16.2825 7.19445 14.1051 6.00008 12 6.00008C11.4777 6.00008 10.951 6.0736 10.4221 6.21509L8.84017 4.63312C9.87262 4.22145 10.9271 4.00008 12 4.00008C14.7276 4.00008 17.3357 5.4307 19.7663 7.78123C20.5955 8.58312 21.3457 9.43923 22.0061 10.2957C22.4046 10.8125 22.6875 11.2191 22.8425 11.4613L23.1871 12.0001L22.8425 12.5389C22.6875 12.7811 22.4046 13.1876 22.0061 13.7045C21.4349 14.4452 20.7966 15.1857 20.0981 15.891Z" fill="#7D45D8"/>
        </svg>);
        break;
    }
};

const remeber_text = (label, type) => {

    return (
        <div class="rem-sel-item">
            <span>{label}. </span>
            {question_item(type)}
        </div>
    );
}

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "transparent", border: 0, boxShadow: "none", "&:hover": {borderColor: "transparent"} }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        
      return {
        ...styles        
      };
    },    
  };

const DropdownIndicator = props => {
return (
    <components.DropdownIndicator {...props}>
        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84238 7L14.8818 0H0.802979L7.84238 7Z" fill="#32373C"/>
</svg>
    </components.DropdownIndicator>
);
};


export class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remember: ""
        }
    };

    onChangeRemember(e) {

        let q = this.props.questions[e.value - 1];
        
        if (this.props.quill.quill) {
            if (this.props.quill.selected == this.props.active.id) {
                this.props.quill.quill.getEditor().insertEmbed(this.props.quill.index, "em", {"className": "in-icon" + q.type, "id": e.value});

                // this.props.quill.quill.getEditor().insertText(this.props.quill.index, "<em>123</em>");
                 // this.props.quill.quill.getEditor().insertEmbed(10, "image", "https://quilljs.com/images/cloud.png");
            }
                 


        }
    }

  render() {
       
    let remembers_info = [];
    

    if (this.props.active && this.props.active.id > 1) {
        let rcount = this.props.active.id - 1;
        let rmem = [];        
        for (let i = 0; i < rcount; i++) {
           if (availabletype.indexOf(this.props.questions[i].type) >= 0) {
                rmem.push(
                {
                    value: this.props.questions[i].id,
                    label: remeber_text(this.props.questions[i].id, this.props.questions[i].type)
                }
                );
           }
            
        }

        remembers_info = rmem;
        
    }


    return (
        <Fragment>
           <Select ref="smemberinfo" options={remembers_info} 
            styles={colourStyles}            
            components={{DropdownIndicator, IndicatorSeparator: () => null}}
            onChange={(e) => {this.onChangeRemember(e)}}
            value = {this.state.remember}
            isSearchable={false}
            />
        </Fragment>
    )
  }

}

export const mapStateToProps = store => {

  return {    
    questions: store.questions,
    active: store.activate,
    quill: store.quill,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        changeRemember: (data) => {
            dispatch(dispatchchangeQuestion(data));         
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);