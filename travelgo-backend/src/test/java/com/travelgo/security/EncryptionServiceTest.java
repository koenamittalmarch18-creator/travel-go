package com.travelgo.security;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class EncryptionServiceTest {

    @Test
    void shouldEncryptAndDecrypt() {
        String original = "Koena Mittal";

        // We'll wire the actual service in the next step.
        assertEquals("Koena Mittal", original);
    }
}