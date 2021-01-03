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
            <h2>You'll have a damn good time!</h2>
          </div>
          <div className="hellMenuItems">
            <div className="hellMenuItem">
              <div className="hellMenuItemName">
                <h4>Limbo Lounge</h4>
              </div>
              <div className="hellMenuItemDescription">
                <p>
                  Relax and enjoy some of Hell's basic amenities: sorting
                  through junk mail, standing in line at the DMV, a wall of TVs
                  that only show CSPAN, and many more!
                </p>
                Lack of choice, boring, basic, unknowing
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Paragliding Race</div>
              <div className="hellMenuItemDescription">
                <p>
                  Compete in a paragliding race through turbulent winds, dodging
                  the lustful damned. The winner gets a coupon for their next
                  visit to Hell!
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Buffet</div>
              <div className="hellMenuItemDescription">
                <p>
                  Feast on an all you can eat buffet in Hell's finest dining
                  hall while the gluttonous damned watch from outside, sinking
                  into vile putrid slush while being pelted by icy ran!
                </p>
                Feast, icy rain, vile putrid slush
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Casino</div>
              <div className="hellMenuItemDescription">
                Test your luck at Hell's Casino! Patrons can exchange souls for
                Each patron will be accompanied by a damned greedy servant
                tasked to carry their wallet.
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Anger</div>
              <div className="hellMenuItemDescription">
                <p>
                  Sit back and relax on a boat tour through the River Styx,
                  where you can witness incredible combat performances by
                  warriors, pirates, barbarians, and more!
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Flaming Crypts</div>
              <div className="hellMenuItemDescription">
                <p>
                  Enter your own personal crypt and enjoy the flesh-melting
                  flames and blood curdling screams of the damned.
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Oasis of Violence</div>
              <div className="hellMenuItemDescription">
                <p>
                  The finest oasis in all the realms! Enjoy the shade of trees
                  made from the souls of the damned as you relax by the lake of
                  boiling blood. Burying your feet in the sand that is literally
                  on fire with centaurs at your beck and call.
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">10 Ring Spa</div>
              <div className="hellMenuItemDescription">
                <p>
                  Visit Hell's most popular attraction! Your spa treatment will
                  begin with a whipping by Hell's cruelest demons. Then you'll
                  be inserted head first into a hole in a rock, where the
                  exfoliating flames of Hell will be lit at your feer. Once your
                  feet are singed, your neck will be snapped around 180 degrees
                  as your dunked in boiling pitch. Monstrous reptiles will haul
                  you out of the pitch for your final treatment: being hacked in
                  half by a sword wielding demon! Each guest leaves with a
                  personalized leaden robe and random affliction!
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
            <div className="hellMenuItem">
              <div className="hellMenuItemName">Ice Palace</div>
              <div className="hellMenuItemDescription">
                <p>
                  Feel the presence of the Devil herself as you walk the deepest
                  depths of hell, decorated by flesh-filled ice sculptures of
                  the most wretched damned.
                </p>
              </div>
              <div className="hellMenuItemPrice">
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
                <FontAwesomeIcon icon={faSkull} className="faIcon soul" />
              </div>
            </div>
          </div>
          <div className="hellMenuFooter">
            <h3>For questions about our services, consult Minos.</h3>
          </div>
        </div>
      </section>
    );
  }
}
