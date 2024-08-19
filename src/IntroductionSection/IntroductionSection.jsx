import IntroductionItem from '../IntroductionItem/IntroductionItem';
import './IntroductionSection.css';
import EPCBanner from '../images/EPCBanner.webp';
import OilAndGasBanner from '../images/OilGasBanner.webp';
import ChemicalsSupplyBanner from '../images/ChemicalsSupplyBanner.webp';
import ProjectAndEquipmentBanner from '../images/ProjectEquipmentBanner.webp';
import PowerBanner from '../images/PowerBanner.webp';

export default function IntroductionSection() {
    return (
        <div className="IntroductionSection">
            <div className="IntroductionSection-Left">
                <hr className='Stretchbar'/>
                <h1>WHAT WE DO</h1>
                <IntroductionItem title="EPC" bgImg={EPCBanner}>
                    <li>Design and Pre-construction services</li>
                    <li>Planning and construction supervision of Oil & Gas Facilities</li>
                    <li>Engineering of pipeline systems, transportation and storage systems  as well complete Maintenance systems or in stages for Oil & Gas mid and upstream</li>
                    <li>Process measuring and control systems</li>
                    <li>Engineering & Technical Support</li>
                    <li>Cost & Quality Management</li>
                    <li>Inspection & Testing Services</li>
                    <li>Certification & Conformity Assessment Services</li>
                    <li>Wastewater treatment</li>
                    <li>Operations and maintenance</li>
                    <li>Pre-shipment and third-party inspection services</li>
                    <li>Tank Cleaning and Oil Recovery</li>
                </IntroductionItem>
                <IntroductionItem title="PRODUCTS AND EQUIPMENT SUPPLY" bgImg={ProjectAndEquipmentBanner}>
                    <li>Steel tubes, plates, pipes, and pipeline systems</li>
                    <li>Flanges, valves, bolts, fittings, gaskets</li>
                    <li>Process units, Compressors</li>
                    <li>Drilling equipment</li>
                    <li>Pumps and pumping systems</li>
                    <li>Flare systems</li>
                    <li>Mixer, Burner Actuators</li>
                    <li>Storage tanks</li>
                    <li>Equipment for offshore platforms</li>
                    <li>Inspection and monitoring of equipment</li>
                    <li>Explosion proof light fittings and cables</li>
                    <li>Oil testing laboratory equipment</li>
                    <li>Oil well cement</li>
                    <li>PPE & Fire Protecting Clothing</li>
                </IntroductionItem>
            </div>
            <div className="IntroductionSection-Right">
                <IntroductionItem title="OIL AND GAS SERVICES" bgImg={OilAndGasBanner}>
                    <li>Drilling</li>
                    <li>Cementing</li>
                    <li>Completion, Testing, Stimulation, Artificial Lift</li>
                    <li>WO and Drilling Integrated Project Management</li>
                    <li>Enhanced Oil Recovery Flowlines & Pipelines Gas Processing</li>
                    <li>Production Stimulation</li>
                </IntroductionItem>
                <IntroductionItem title="CHEMICALS SUPPLY" bgImg={ChemicalsSupplyBanner}>
                    <li>Abrasives, Accelerators, Acids and Alkalis</li>
                    <li>Activated Carbon</li>
                    <li>Adhesives & Sealants Alcohols (e.g. Methanol)</li>
                    <li>Amines (e.g. MEA)</li>
                    <li>Antifoam / Defomers</li>
                    <li>Coatings</li>
                    <li>Corrosion Inhibitors and Demulsifiers</li>
                    <li>Dispersants</li>
                    <li>Dyes</li>
                    <li>Foaming Agents Glycols</li>
                    <li>Lubricants, Phosphats</li>
                    <li>Retarders</li>
                    <li>Silicones, Solvents, Stabilizers</li>
                    <li>Water clarifiers</li>
                </IntroductionItem>
                <IntroductionItem title="POWER" bgImg={PowerBanner}>
                    <li>power</li>
                    <li>Low Voltage Systems</li>
                    <li>Industrial Components and Controls</li>
                    <li>Power and Construction Industries</li>
                    <li>Panel Builders, Electrical Installation Engineers</li>
                    <li>Planning, Operating, and EPC models</li>
                    <li>Solar Power Plants</li>
                </IntroductionItem>
            </div>
        </div>
    )
}