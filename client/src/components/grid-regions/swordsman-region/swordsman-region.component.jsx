// jshint esversion:6
import React from 'react';
import './swordsman-region.styles.scss';
import '../grid-regions.styles.scss';
import CastleTower from '../../castle-tower/castle-tower.component';
import CastleWall from '../../castle-wall/castle-wall.component';
import Goblin from '../../monsters/goblin.component';
import Orc from '../../monsters/orc.component';
import Troll from '../../monsters/troll.component';
import GoblinKing from '../../monsters/goblin-king.component';
import OrcWarlord from '../../monsters/orc-warlord.component';
import Shaman from '../../monsters/shaman.component';
import OgreMage from '../../monsters/ogre-mage.component';
import { connect } from 'react-redux';
import { selectDefensesInfo } from '../../../redux/defenses/defenses.selectors';
import { toggleRebuild } from '../../../redux/selectedcard/selectedcard.action';
import { selectRebuild } from '../../../redux/selectedcard/selectedcard.selectors';
import { socket } from '../../../assets/socketIO/socketIO.utils';

const SwordsmanRegion = ({defenses, monsters, rebuild, toggleRebuild}) => {
    const emitterSetup = (number) => {
        function emitter() {
            if (rebuild) {
                socket.emit('rebuild', 'castle ' + number);
                toggleRebuild();
            }
        }
        return emitter;
    };
    return (
        <div className="cn-wrapper swordsman opened-nav">
            <ul>
            {
                [6,1,2,3,4,5].map((num,i) => {
                    return (
                        <li key={i}>
                            <a className={`swordsman ${num}`} onClick={emitterSetup(num)} href={'#'}>
                                <span>Swordsman</span>
                                {
                                    monsters ? 
                                    (
                                        monsters.filter(monster => monster.location === 'swordsman ' + num).map(m => {
                                            if (m.name === 'Goblin') {
                                                return <Goblin id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Orc') {
                                                return <Orc id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Troll') {
                                                return <Troll id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Goblin King') {
                                                return <GoblinKing id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Orc Warlord') {
                                                return <OrcWarlord id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Shaman') {
                                                return <Shaman id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Ogre Mage') {
                                                return <OgreMage id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            }
                                        })
                                    ) 
                                    : 
                                    (
                                        null
                                    )
                                }
                                {
                                    defenses ? 
                                    (
                                        defenses.filter(defense => {
                                            return (defense.name === 'Wall' && defense.location === 'castle ' + num);
                                        }).map(wall => <CastleWall/>)
                                    ) 
                                    : 
                                    (
                                        null
                                    )

                                }
                                {
                                    defenses ? 
                                    (
                                        defenses.filter(defense => {
                                            return (defense.name === 'Tower' && defense.location === 'castle ' + num);
                                        }).map(wall => <CastleTower/>)
                                    ) 
                                    : 
                                    (
                                        null
                                    )
                                }
                                {
                                    monsters ? 
                                    (
                                        monsters.filter(monster => monster.location === 'castle ' + num).map(m => {
                                            if (m.name === 'Goblin') {
                                                return <Goblin className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Orc') {
                                                return <Orc className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Troll') {
                                                return <Troll className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Goblin King') {
                                                return <GoblinKing className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Orc Warlord') {
                                                return <OrcWarlord className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Shaman') {
                                                return <Shaman className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            } else if (m.name === 'Ogre Mage') {
                                                return <OgreMage className='in-castle' id={m._id} hitpoints={m.hitpoints} location={m.location}/>
                                            }
                                        })
                                    ) 
                                    : 
                                    (
                                        null
                                    )
                                }
                            </a>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        defenses: selectDefensesInfo(state),
        rebuild: selectRebuild(state)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        toggleRebuild: () => dispatch(toggleRebuild())
    });
  };
export default connect(mapStateToProps, mapDispatchToProps)(SwordsmanRegion);