import React, { Component } from 'react';
import CardStat from '../components/CardStat.js'
import EtherScanFetcher from '../components/EtherScanFetcher.js'

const mvmFundsProps = {
  mainTitile: 'MVM Funds',
  mainValue: '16,278',
  linkTitle: 'More info...',
  link: 'FAQ',
  icon:'account_balance_wallet',
  textColor: 'text-success',
};
const mvmStageProps = {
  mainTitile: 'MVM Stage',
  mainValue: '3/6',
  linkTitle: 'More info...',
  link: 'FAQ',
  icon: 'timelapse',
  textColor: 'text-dark',
};
const mvmBurnedProps = {
  mainTitile: 'Tokens Burned',
  linkTitle: 'More info...',
  link: 'FAQ',
  icon:'whatshot',
  toContract: '0x27218c41e1054dC0484ACD2aD35DEF0ffd17782A',
  textColor: 'text-danger',
};
const mvmBurnedCallData = '0x555f323a'

export default class CardStatGroup extends Component {

  constructor(props) {
    super(props);
  }

  _renderCardStat = value => <CardStat { ...mvmBurnedProps } mainValue={value}/>

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <CardStat { ...mvmFundsProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <CardStat { ...mvmStageProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <EtherScanFetcher callData={mvmBurnedCallData}
              render={this._renderCardStat}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
