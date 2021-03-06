// jshint esversion:6
import React from 'react';
import './forest-region.styles.scss';
import '../grid-regions.styles.scss';
import Goblin from '../../monsters/goblin.component';
import Orc from '../../monsters/orc.component';
import Troll from '../../monsters/troll.component';
import GoblinKing from '../../monsters/goblin-king.component';
import OrcWarlord from '../../monsters/orc-warlord.component';
import Shaman from '../../monsters/shaman.component';
import OgreMage from '../../monsters/ogre-mage.component';
import Overlord from '../../monsters/overlord.component';
import Dragon from '../../monsters/dragon.component';
import Giant from '../../monsters/giant.component';
import SavageOrc from '../../monsters/savage-orc.component';
import GoblinTrickster from '../../monsters/goblin-trickster.component';
import ArmoredOrc from '../../monsters/armored-orc.component';
import Wyvern from '../../monsters/wyvern.component';

const ForestRegion = ({monsters}) => {
    return (
        <div className="cn-wrapper forest opened-nav">
            <ul>
            {
                [6,1,2,3,4,5].map((num,i) => {
                    return (
                        <li key={i}>
                            <a className={`forest ${num}`} href={'#'}>
                                <span>Forest</span>
                                {
                                    monsters ? 
                                    (
                                        monsters.filter(monster => monster.location === 'forest ' + num).map((m, i) => {
                                            if (m.name === 'Goblin') {
                                                return <Goblin id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Orc') {
                                                return <Orc id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Troll') {
                                                return <Troll id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Goblin King') {
                                                return <GoblinKing id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Orc Warlord') {
                                                return <OrcWarlord id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Shaman') {
                                                return <Shaman id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Ogre Mage') {
                                                return <OgreMage id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Overlord') {
                                                return <Overlord id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Dragon') {
                                                return <Dragon id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Giant') {
                                                return <Giant id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Savage Orc') {
                                                return <SavageOrc id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Goblin Trickster') {
                                                return <GoblinTrickster id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Armored Orc') {
                                                return <ArmoredOrc id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
                                            } else if (m.name === 'Wyvern') {
                                                return <Wyvern id={m._id} key={i} hitpoints={m.hitpoints} location={m.location} points={m.points}/>
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

export default ForestRegion;