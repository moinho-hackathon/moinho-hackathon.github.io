import {MIDDLE_SECTION} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function AgendaCard(props, index) {
  return (
    <div key={index} className="AgendaCard">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title AgendaTitle">{props.TITLE}</h3>
          <p className="card-text AgendaText">{props.DESCRIPTION}</p>
        </div>
      </div>
    </div>
  );
}

function SectionAgendaAbout() {
  return (
    <div className="SectionAgendaAbout">
      <h2>{MIDDLE_SECTION.AGENDA_TITLE}</h2>
      <div className="AgendaCards">
        {MIDDLE_SECTION.AGENDA.map((props, i) => AgendaCard(props, i))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS hidden-sm hidden-xs">
      <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="Limbohacks" />
    </div>
  );
}

export {Logo, LogoSectionAbout, SectionAgendaAbout};
