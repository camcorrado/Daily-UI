import React, { Component } from "react";
import "./Day30.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

export default class Day30 extends Component {
  render() {
    return (
      <section className="pricing">
        <div className="assignment">
          <h2 className="dayNumber">Day 30</h2>
          <h3 className="dayDescription">Pricing</h3>
        </div>
        <div className="hellMenu">
          <div className="hellMenuTitle">
            <h1>Welcome to Hell</h1>
          </div>
          <div className="hellMenuSlogan">
            <h2>You'll have a damn good time!*</h2>
          </div>
          <div className="hellMemberships">
            <div className="hellMembership">
              <div className="hellMembershipTitle">
                <h2>The Damned</h2>
              </div>
              <div className="hellMembershipPrice">
                <div className="souls">
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                </div>
                <p>per month</p>
              </div>
              <div className="hellMembershipDescription">
                <p>You're lucky we even let you in at this price!</p>
                <p>
                  This membership grants access to the first three circles of
                  Hell.
                </p>
              </div>
              <div className="hellMembershipFeatures">
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Limbo Lounge</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Relax and enjoy some of Hell's most basic amenities:
                      sorting through junk mail, standing in line at the DMV, a
                      wall of TVs that only tune into CSPAN, and not much more!
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Paragliding Race</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Compete in a paragliding race through turbulent winds,
                      dodging the lustful damned. The winner gets a discount
                      towards their next membership renewal! Maybe a discount
                      will help you afford a better membership...
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>All You Can Stomach Buffet</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Feast on an all you can eat buffet in Hell's finest dining
                      hall while the gluttonous damned watch from outside,
                      sinking into vile putrid slush while being pelted by icy
                      rain!
                    </p>
                  </div>
                </div>
              </div>
              <div className="hellMembershipButton">
                <button>Select Membership</button>
              </div>
            </div>
            <div className="hellMembership">
              <div className="hellMembershipTitle">
                <h2>Fire &amp; Brimstone</h2>
              </div>
              <div className="hellMembershipPrice">
                <div className="souls">
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                </div>
                <p>per month</p>
              </div>
              <div className="hellMembershipDescription">
                <p>
                  Not much of an upgrade from The Damned membership plan, but
                  hey - anything beats that!
                </p>
                <p>
                  This membership grants access to the first six circles of
                  Hell.
                </p>
              </div>
              <div className="hellMembershipFeatures">
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Casino</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Test your luck at Hell's Casino! Patrons can exchange
                      souls for heavy sacks of gold. Each patron will be
                      accompanied by one of the greedy damned as a servant
                      tasked to carry their gold.
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>River Styx Boat Tour</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Sit back and relax on a boat tour through the River Styx,
                      where you can witness incredible combat performances by
                      warriors, pirates, barbarians, and more!
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Flaming Crypts</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Enter your own personal crypt and enjoy the flesh-melting
                      flames and blood curdling screams of the damned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hellMembershipButton">
                <button>Select Membership</button>
              </div>
            </div>
            <div className="hellMembership">
              <div className="hellMembershipTitle">
                <h2>Infernal Beast</h2>
              </div>
              <div className="hellMembershipPrice">
                <div className="souls">
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                  <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                </div>
                <p>per month</p>
              </div>
              <div className="hellMembershipDescription">
                <p>
                  You must be one evil son of a gun! We're almost tempted to let
                  you in for free, but business is business.
                </p>
                <p>This membership grants access to all circles of Hell.</p>
              </div>
              <div className="hellMembershipFeatures">
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Oasis of Violence</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      The finest oasis in all the realms! Enjoy the shade of
                      trees made from the souls of the damned as they're feasted
                      on by harpies. Relax by the lake of boiling blood with
                      centaurs at your beck and call. Bury your feet in the sand
                      that is literally on fire.
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>10 Bolge Spa</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Your spa treatment will begin with a whipping by Hell's
                      cruelest demons. Once your body is covered in welts,
                      you'll be inserted head first into a hole in a rock where
                      the exfoliating flames of Hell will be lit at your feet.
                      Once your feet are singed, your head will be snapped
                      backwards as you're dunked in boiling pitch. Monstrous
                      reptiles will haul you out of the pitch for your final
                      treatment: being hacked into bits by a sword wielding
                      demon! Each guest leaves with a personalized leaden robe
                      and random affliction!
                    </p>
                  </div>
                </div>
                <div className="hellMembershipFeature">
                  <div className="hellMembershipFeatureName">
                    <h3>Ice Palace</h3>
                  </div>
                  <div className="hellMembershipFeatureDescription">
                    <p>
                      Feel the presence of the Devil herself as you walk the
                      deepest depths of hell, decorated by flesh-filled ice
                      sculptures of the most wretched damned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hellMembershipButton">
                <button>Select Membership</button>
              </div>
            </div>
          </div>
          <footer>
            <p>
              *unless you're a child, because they're not permitted. For
              questions, contact Minos.
            </p>
          </footer>
        </div>
      </section>
    );
  }
}
