-- Tabela para armazenar os eventos do webhook do Asaas e garantir idempotência
CREATE TABLE IF NOT EXISTS asaas_events (
    event_id TEXT PRIMARY KEY,
    event_type TEXT NOT NULL,
    processed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
