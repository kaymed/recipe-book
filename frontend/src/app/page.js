"use client"

import Image from "next/image";

import { Button } from "@progress/kendo-react-buttons";

import { 
  Card, 
  CardActions,
  CardBody, 
  CardHeader, 
  CardTitle 
} from "@progress/kendo-react-layout";

import styles from "./page.module.css";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2>KendoReact ❤️ Next.js</h2>
        <div>
          <Button themeColor="primary" fillMode="flat" className="k-mr-1">Home</Button>
          <Button themeColor="primary" fillMode="flat" onClick={() => router.push('/grid')}>Grid</Button>
        </div>
      </header>
      <div className={styles.container}>
        <Image
          className={styles.reactLogo}
          src="/react.svg"
          alt="React Logo"
          width={886}
          height={788}
          priority
        />
        <div className="k-d-flex k-flex-col">
          <h1 className={styles.title}>Welcome to KendoReact</h1>
          <h3 className={styles.subtitle}>Comprehensive React UI Component Library</h3>
          <div className="k-mt-3">
            <Button themeColor="primary" className="k-mr-2">
              <a href="https://www.telerik.com/kendo-react-ui" target="_blank">Try KendoReact</a>
            </Button>
            <Button themeColor="secondary" fillMode="solid">
              <a href="https://vercel.com/" target="_blank">More about Next.js</a>
            </Button>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className="k-pl-8">
            <h5 className={styles.sectionTitle}>Get started</h5>
            <p>Edit index page at or set up data source at <code>src/app/page.js</code> or set up data source at <code>src/app/grid/orders.json</code></p>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsWrapper}>
          <h5 className={styles.sectionTitle}>Highlights</h5>
          <div className={styles.cardsContainer}>
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <Image
                    src="/documentation.svg"
                    alt="Documentation Logo"
                    width={64}
                    height={64}
                    priority
                  />
                <CardTitle className={styles.cardTitle}>Documentation</CardTitle>
              </CardHeader>
              <CardBody>
                <p className={styles.cardBody}>
                  Unlock the full potential of our features! Check KendoReact Documentation for step-by-step guides and insights.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/kendo-react-ui/components/" target="_blank">Learn more</a>
                </Button>
              </CardActions>
            </Card>

            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <Image
                  src="/classroom.svg"
                  alt="Virtual Classroom Logo"
                  width={64}
                  height={64}
                  priority
                />
                <CardTitle className={styles.cardTitle}>Virtual Classroom</CardTitle>
              </CardHeader>
              <CardBody>
                <p className={styles.cardBody}>
                  Need to quickly get started with KendoReact or just prefer video on-boarding materials we have Virtual Classroom for you.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://rb.gy/w21cc8" target="_blank">Get Started</a>
                </Button>
              </CardActions>
            </Card>

            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <Image
                  src="/design.svg"
                  alt="Design System Logo"
                  width={64}
                  height={64}
                  priority
                />
                <CardTitle className={styles.cardTitle}>Design System</CardTitle>
              </CardHeader>
              <CardBody>
                <p className={styles.cardBody}>
                  Quickly apply harmonious and consistent styles to the components in your app with the Progress Design System.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/design-system" target="_blank">Find your style</a>
                </Button>
              </CardActions>
            </Card>

            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <Image
                  src="/license.svg"
                  alt="License Logo"
                  width={64}
                  height={64}
                  priority
                />
                <CardTitle className={styles.cardTitle}>Activate your license</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className={styles.cardBodyList}>
                  <li>Flexible Licensing Policy</li>
                  <li>Maintenance & Support</li>
                  <li>Total Cost of Ownership</li>
                  <li>Enterprise-Ready Offerings</li>
                </ul>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/purchase.aspx?filter=web#individual-products" target="_blank">Buy now</a>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Copyright © 2023 Progress Software. All rights reserved.</p>
      </footer>
    </div>
  )
}
