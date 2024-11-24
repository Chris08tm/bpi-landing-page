import backup from "../assets/backups-transparent.png";
import tuneup from "../assets/tuneups-transparent.png";
import remote from "../assets/remote_support-transparent.png";

export default function BPIServices() {
  return (
    <div className="services-page" id="services-page">
      <h1 className="page-heading">Our services</h1>
      <div className="card-carousel">
        <div class="card">
          <img className="card-image" src={tuneup} alt="Tuneup" />
          <div class="container">
            <h4>
              <b>Tune-up</b>
            </h4>
            <p>
              A computer tune-up is like giving your computer a check-up and
              cleaning to make it run faster and more efficiently. It involves
              removing unnecessary files, fixing software issues, updating
              programs, removing those pesky pop-ups, and ensuring there are no
              viruses or malware slowing it down. Think of it as tidying up and
              optimizing your computer so it works like it's new again!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4>
              <b>Data Backup</b>
            </h4>
            <p>
              A data backup is a copy of your important files, like documents,
              photos, or videos, saved in a safe place. This way, if your
              computer crashes, gets lost, or is damaged, you won't lose your
              files. Backups can be stored on an external drive or in the cloud,
              giving you peace of mind that your data is secure and easy to
              restore.
            </p>
          </div>
          <img className="card-image" src={backup} alt="Backup" />
        </div>
        <div class="card">
          <img className="card-image" src={remote} alt="Remote support" />
          <div class="container">
            <h4>
              <b>Remote Support & Consultations</b>
            </h4>
            <p>
              Remote support and consultations allow a technician to help you
              with your computer or tech issues without being in the same
              location. Using a secure connection, they can access your
              computer, troubleshoot problems, install software, or provide
              advice. It's a convenient way to get expert help from the comfort
              of your home or office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
