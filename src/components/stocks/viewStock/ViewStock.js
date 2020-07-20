import React from 'react';
import { connect } from "react-redux";

class ViewStock extends React.Component {
    getStock = () => {
        let lastId = 0;
        return (
            Object.values(this.props.stocks).map(value => {
                if (value.id.toString() === this.props.match.params.id) {
                    return (
                        <div className="stock-card-view" key={value.id}>
                            {Object.entries(value).map(data => {
                                if (data[0] !== 'id') {
                                    return (
                                        <div className="row py-2" key={lastId++}>
                                            <div className="col-2">
                                                <strong>{data[0]}</strong>
                                            </div>
                                            <div className={`col ${((data[0] === "gainOrLoss" || data[0] === "growth") && parseFloat(data[1])) < 0 && 'text-danger'}
                                            ${((data[0] === "gainOrLoss" || data[0] === "growth") && parseFloat(data[1])) > 0 && 'text-success'}
                                            `}>
                                                {data[1]}
                                            </div>
                                        </div>
                                    )
                                }
                                return true;
                            })}
                        </div>
                    )
                }
                return true;
            })
        )
    }


    render() {
        return (
            this.getStock()
        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps)(ViewStock);
