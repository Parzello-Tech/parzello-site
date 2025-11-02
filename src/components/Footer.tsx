import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
            <Row
                className={styles.mobile}
                maxWidth="m"
                paddingY="8"
                paddingX="16"
                gap="16"
                horizontal="between"
                vertical="center"
                s={{
                    direction: "column",
                    horizontal: "center",
                    align: "center",
                }}
            >
                <Text variant="body-default-s" onBackground="neutral-strong" align="center">
                    <Text onBackground="neutral-weak">© {currentYear} /</Text>
                    <Text paddingX="4" onBackground="brand-strong">
                        Parzello Tech
                    </Text>
                    <Text onBackground="neutral-weak">
                        — Menyediakan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda.
                        <br />
                    </Text>
                </Text>

                <Row gap="16" paddingTop="8">
                    {social.map((item) => item.link && <IconButton key={item.name} href={item.link} icon={item.icon} tooltip={item.name} size="s" variant="ghost" />)}
                </Row>
            </Row>

            {/* Spacer for layout on mobile */}
            <Row height="80" hide s={{ hide: false }} />
        </Row>
    );
};
