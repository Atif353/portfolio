import { hero, profile } from "@/data/site";
import { Accent } from "@/shared/components/ui/Accent";
import { Button } from "@/shared/components/ui/Button";
import { Container } from "@/shared/components/ui/Container";
import { StatusDot } from "@/shared/components/ui/StatusDot";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.topRow}>
        <div className={styles.availability}>
          <StatusDot />
          <span>{hero.availability}</span>
        </div>
        <span className={styles.location}>{profile.location}</span>
      </div>
      <div className={styles.headline}>
        <span className={styles.kicker}>{hero.kicker}</span>
        <h1 className={styles.title}>
          {hero.headline} <Accent tight>{hero.headlineAccent}</Accent>
        </h1>
      </div>
      <div className={styles.bottom}>
        <p className={styles.intro}>{hero.intro}</p>
        <div className={styles.ctas}>
          <Button to="/work" arrow="→">
            See selected work
          </Button>
          <Button to="/contact" variant="outline">
            Start a conversation
          </Button>
        </div>
      </div>
    </Container>
  );
}
